<template>
  <div class="similar">
    <div class="main-container">
        <div class="title">{{ similar.title }}</div>

        <div class="cards">
            <div class="card_item" v-for="item in similar.cards" :key="item">
                <div class="card_head">
                    <img :src="require(`../assets/images/${item.img}`)" alt="">
                    <div class="card_item_hover">
                    <a href="#">
                        <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></g></svg>
                        <span>Ditails</span>
                    </a>
                    <a href="#">
                        <svg fill="#ffffff" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-35.85 -35.85 583.91 583.91" xml:space="preserve" stroke="#ffffff" stroke-width="21.512735999999997"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M52.832,0v512.208l406.544-256.096L52.832,0z M68.832,29.008l360.512,227.104L68.832,483.216V29.008z"></path> </g> </g> </g></svg>
                        <span>Preview</span>
                    </a>
                </div>
                </div>
                <div class="card_body">
                    <div class="card_title">{{ item.title }}</div>
                    <div class="by">{{ item.by }}</div>
                    <div class="buttons">
                        <div v-for="button in item.buttons" :key="button" class="button">{{ button }}</div>
                    </div>
                </div>
                <div class="price">{{ item.price }}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Similar",
    props: {
        similar: Object
    }
}
</script>