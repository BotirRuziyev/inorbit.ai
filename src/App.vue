<template>
  <div id="app">
    <Header />
    <nav>
      <router-view />
    </nav>
    <Footer />
    <TechBloks />
    <SignUp />
  </div>
</template>
//
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechBloks from "@/components/TechBloks";
import SignUp from "@/components/SignUp";
export default {
  components: {
    Footer,
    Header,
    TechBloks,
    SignUp,
  },
};
</script>
