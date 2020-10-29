<template>
  <section id="skills" class="bg-indigo-900 py-6">
    <div class="container">
      <div class="w-full flex flex-wrap px-4">
        <h3
          class="font-bold uppercase text-2xl md:text-4xl w-full text-white my-6"
        >
          Mis habilidades
        </h3>

        <h4
          class="font-bold uppercase text-xl md:text-2xl w-full text-white text-left my-6 border-b-2 border-white"
        >
          Backend
        </h4>
        <div class="flex flex-wrap justify-around md:justify-start">
          <Skill name="Laravel" :level="9" fill="#FF2D20">
            <LaravelLogo></LaravelLogo>
          </Skill>
          <Skill name="Drupal" :level="8" fill="#0678BE">
            <DrupalLogo></DrupalLogo>
          </Skill>
          <Skill name="NodeJS" :level="5" fill="#339933 ">
            <NodeJSLogo></NodeJSLogo>
          </Skill>
          <Skill name=".NET Core" :level="5" fill="#5C2D91">
            <NETCoreLogo></NETCoreLogo>
          </Skill>
        </div>

        <h4
          class="font-bold uppercase text-2xl w-full text-white text-left my-6 border-b-2 border-white"
        >
          Frontend
        </h4>

        <div class="flex flex-wrap justify-around md:justify-start">
          <Skill name="Bootstrap" :level="7" fill="#563D7C">
            <BootstrapLogo></BootstrapLogo>
          </Skill>
          <Skill name="TailwindCss" :level="9" fill="#38B2AC">
            <TailwindLogo></TailwindLogo>
          </Skill>
          <Skill name="VueJs" :level="7" fill="#4FC08D">
            <VueLogo></VueLogo>
          </Skill>
          <Skill name="NuxtJs" :level="5" fill="#00C58E">
            <NuxtJsLogo></NuxtJsLogo>
          </Skill>
          <Skill name="Angular2+" :level="6" fill="#DD0031">
            <AngularLogo></AngularLogo>
          </Skill>
          <Skill name="SASS/SCSS" :level="8" fill="#CC6699">
            <SASSLogo></SASSLogo>
          </Skill>
        </div>
        <h4
          class="font-bold uppercase text-2xl w-full text-white text-left my-6 border-b-2 border-white"
        >
          Otros
        </h4>

        <div class="flex flex-wrap justify-around md:justify-start">
          <Skill name="Unity" :level="5" fill="#000000">
            <UnityLogo></UnityLogo>
          </Skill>
          <Skill name="Ionic" :level="7" fill="#3880FF">
            <IonicLogo></IonicLogo>
          </Skill>
          <Skill name="C#" :level="6" fill="#239120">
            <CSharpLogo></CSharpLogo>
          </Skill>
          <Skill name="PHP" :level="9" fill="#777BB4">
            <PHPLogo></PHPLogo>
          </Skill>
          <Skill name="Java" :level="6" fill="#007396">
            <JavaLogo></JavaLogo>
          </Skill>
          <Skill name="Javascript" :level="6" fill="#F7DF1E">
            <JavaScriptLogo></JavaScriptLogo>
          </Skill>
          <Skill name="SVN" :level="8" fill="#809CC9">
            <SVNLogo></SVNLogo>
          </Skill>
          <Skill name="Microsoft Teams" :level="8" fill="#6264A7">
            <MSTeamsLogo></MSTeamsLogo>
          </Skill>
          <Skill name="Docker" :level="3" fill="#2496ED">
            <DockerLogo></DockerLogo>
          </Skill>
          <Skill name="Typescript" :level="2" fill="#007ACC">
            <TypeScriptLogo></TypeScriptLogo>
          </Skill>
          <Skill name="Git" :level="4" fill="#F05032">
            <GitLogo></GitLogo>
          </Skill>
          <Skill name="Postman" :level="5" fill="#FF6C37">
            <PostmanLogo></PostmanLogo>
          </Skill>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import {
  CSharpLogo,
  LaravelLogo,
  DrupalLogo,
  NodeJSLogo,
  NETCoreLogo,
  BootstrapLogo,
  TailwindLogo,
  VueLogo,
  NuxtJsLogo,
  AngularLogo,
  SASSLogo,
  UnityLogo,
  IonicLogo,
  PHPLogo,
  JavaLogo,
  JavaScriptLogo,
  SVNLogo,
  MSTeamsLogo,
  DockerLogo,
  TypeScriptLogo,
  GitLogo,
  PostmanLogo,
} from '~/plugins/logos'
import Skill from '@/components/Skill'

export default {
  name: 'Skills',
  components: {
    CSharpLogo,
    LaravelLogo,
    DrupalLogo,
    NodeJSLogo,
    NETCoreLogo,
    BootstrapLogo,
    TailwindLogo,
    VueLogo,
    NuxtJsLogo,
    AngularLogo,
    SASSLogo,
    UnityLogo,
    IonicLogo,
    PHPLogo,
    JavaLogo,
    JavaScriptLogo,
    SVNLogo,
    MSTeamsLogo,
    DockerLogo,
    TypeScriptLogo,
    GitLogo,
    PostmanLogo,
    Skill,
  },
}
</script>

<style scoped></style>
