function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  })
}

function clean(value) {
  return String(value || '').trim()
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      allow: 'POST, OPTIONS',
      'access-control-allow-methods': 'POST, OPTIONS',
      'access-control-allow-headers': 'content-type',
    },
  })
}

export async function onRequestPost(context) {
  let payload

  try {
    payload = await context.request.json()
  } catch {
    return json({ ok: false, message: 'JSON invalido' }, 400)
  }

  const firstName = clean(payload?.firstName)
  const lastName = clean(payload?.lastName)
  const subject = clean(payload?.subject)
  const email = clean(payload?.email)
  const message = clean(payload?.message)

  if (!firstName || !lastName || !subject || !email || !message) {
    return json({ ok: false, message: 'Campos incompletos' }, 400)
  }

  if (!isValidEmail(email)) {
    return json({ ok: false, message: 'Email invalido' }, 400)
  }

  const to = clean(context.env.CONTACT_TO)
  const from = clean(context.env.CONTACT_FROM)
  const apiUrl =
    clean(context.env.MAILCHANNELS_API_URL) ||
    'https://api.mailchannels.net/tx/v1/send'

  if (!to || !from) {
    return json({ ok: false, message: 'Configuracion de email incompleta' }, 500)
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: {
        email: from,
        name: 'Formulario de contacto',
      },
      reply_to: {
        email,
        name: `${firstName} ${lastName}`,
      },
      subject: `${firstName} ${lastName} - ${subject}`,
      content: [
        {
          type: 'text/plain',
          value: [
            `Nombre: ${firstName} ${lastName}`,
            `Email: ${email}`,
            `Asunto: ${subject}`,
            '',
            message,
          ].join('\n'),
        },
      ],
    }),
  })

  if (!response.ok) {
    const details = await response.text()
    return json({ ok: false, message: 'No se pudo enviar el mensaje', details }, 502)
  }

  return json({ ok: true })
}
