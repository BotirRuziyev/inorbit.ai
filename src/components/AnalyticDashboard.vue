<template>
  <div class="analytic-dashboard">
    <div class="main-container">
        <div class="analytic_left">
            <div class="analytic_head">
                <div class="type">Templates</div>
                <div class="title">
                    {{ analytic.title }}
                </div>
                <p v-if="analytic.left.smollText">
                    {{ analytic.left.smollText }}
                </p>
                <div class="button_group">
                    <span v-for="(button, i) in analytic.left.buttonGroup" :key="i" :class="button.main ? 'main' : 'button'">
                        {{ button.name }}
                        <button v-if="button.main">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </button>
                    </span>
                </div>
                <div class="date_info">
                    <span v-for="(date, i) in analytic.left.dateInfo" :key="i" class="text" :class="analytic.left.dateInfo.length - 1 == i ? 'active' : ''">{{ date }}</span>
                </div>
            </div>
            <div class="analytic_body">
                <div class="images">
                    <img v-if="image.type == 'img'" :src="require(`../assets/images/${image.url}`)" alt="">
                    <video v-if="image.type == 'mp4'" :src="require(`../assets/videos/${image.url}`)" controls width="100%"></video>
                </div>
                <div class="ordinal_number">
                    <div class="buttons">
                        <button @click="Prew()" :disabled="analytic.left.images.length == 1" class="prew" :class="analytic.left.images.length == 1 ? 'disabled' : ''">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0D1FA1" stroke-width="0.8640000000000001" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></g></svg>
                        </button>
                        <button @click="Next()" :disabled="analytic.left.images.length == 1" class="next" :class="analytic.left.images.length == 1 ? 'disabled' : ''">
                            <svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0D1FA1" stroke-width="0.8399999999999999" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></g></svg>
                        </button>
                    </div>
                    {{ i + 1 }}/{{ analytic.left.images.length }}
                </div>
            </div>
        </div>
        <div class="analytic_right">
            <div class="type_head">
                <div class="title">
                    {{analytic.right.head.title}}
                </div>
                <div class="for">
                    <span>{{ analytic.right.head.for }}</span>
                    <button v-if="analytic.right.head.forIcon">
                        <svg height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 302.967 302.967" xml:space="preserve" fill="#000000" stroke="#000000" stroke-width="0.00302967"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path style="fill:#010002;" d="M151.483,302.967C67.956,302.967,0,235.017,0,151.483S67.956,0,151.483,0 s151.483,67.956,151.483,151.483S235.017,302.967,151.483,302.967z M151.483,24.416c-70.066,0-127.067,57.001-127.067,127.067 s57.001,127.067,127.067,127.067s127.067-57.001,127.067-127.067S221.555,24.416,151.483,24.416z"></path> </g> <g> <g> <path style="fill:#010002;" d="M116.586,118.12c1.795-4.607,4.297-8.588,7.511-11.961c3.225-3.389,7.114-6.016,11.667-7.898 c4.547-1.904,9.633-2.845,15.262-2.845c7.261,0,13.32,0.995,18.183,2.997c4.857,1.996,8.768,4.482,11.738,7.441 c2.964,2.97,5.091,6.168,6.369,9.584c1.273,3.432,1.915,6.636,1.915,9.595c0,4.901-0.642,8.947-1.915,12.118 c-1.278,3.171-2.866,5.88-4.759,8.131c-1.898,2.252-3.987,4.172-6.293,5.755c-2.295,1.588-4.471,3.171-6.516,4.759 c-2.045,1.583-3.862,3.394-5.445,5.439c-1.588,2.04-2.589,4.601-2.991,7.664v5.831H140.6v-6.908 c0.305-4.395,1.153-8.072,2.529-11.036c1.382-2.964,2.991-5.499,4.83-7.598c1.844-2.089,3.786-3.911,5.836-5.445 c2.04-1.539,3.927-3.073,5.673-4.591c1.73-1.545,3.144-3.225,4.221-5.069c1.071-1.833,1.556-4.15,1.452-6.908 c0-4.705-1.148-8.18-3.454-10.427c-2.295-2.257-5.493-3.378-9.589-3.378c-2.758,0-5.134,0.533-7.131,1.605 s-3.628,2.513-4.911,4.302c-1.278,1.795-2.225,3.894-2.834,6.288c-0.615,2.415-0.919,4.982-0.919,7.756h-22.55 C113.85,127.785,114.791,122.732,116.586,118.12z M162.536,183.938v23.616h-24.09v-23.616H162.536z"></path> </g> </g> </g> </g> </g></svg>
                    </button>
                </div>
                <div class="license" v-if="analytic.right.head.license">
                    <div class="text">{{ analytic.right.head.license }}</div>
                    <button>
                        <svg height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 302.967 302.967" xml:space="preserve" fill="#000000" stroke="#000000" stroke-width="0.00302967"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path style="fill:#010002;" d="M151.483,302.967C67.956,302.967,0,235.017,0,151.483S67.956,0,151.483,0 s151.483,67.956,151.483,151.483S235.017,302.967,151.483,302.967z M151.483,24.416c-70.066,0-127.067,57.001-127.067,127.067 s57.001,127.067,127.067,127.067s127.067-57.001,127.067-127.067S221.555,24.416,151.483,24.416z"></path> </g> <g> <g> <path style="fill:#010002;" d="M116.586,118.12c1.795-4.607,4.297-8.588,7.511-11.961c3.225-3.389,7.114-6.016,11.667-7.898 c4.547-1.904,9.633-2.845,15.262-2.845c7.261,0,13.32,0.995,18.183,2.997c4.857,1.996,8.768,4.482,11.738,7.441 c2.964,2.97,5.091,6.168,6.369,9.584c1.273,3.432,1.915,6.636,1.915,9.595c0,4.901-0.642,8.947-1.915,12.118 c-1.278,3.171-2.866,5.88-4.759,8.131c-1.898,2.252-3.987,4.172-6.293,5.755c-2.295,1.588-4.471,3.171-6.516,4.759 c-2.045,1.583-3.862,3.394-5.445,5.439c-1.588,2.04-2.589,4.601-2.991,7.664v5.831H140.6v-6.908 c0.305-4.395,1.153-8.072,2.529-11.036c1.382-2.964,2.991-5.499,4.83-7.598c1.844-2.089,3.786-3.911,5.836-5.445 c2.04-1.539,3.927-3.073,5.673-4.591c1.73-1.545,3.144-3.225,4.221-5.069c1.071-1.833,1.556-4.15,1.452-6.908 c0-4.705-1.148-8.18-3.454-10.427c-2.295-2.257-5.493-3.378-9.589-3.378c-2.758,0-5.134,0.533-7.131,1.605 s-3.628,2.513-4.911,4.302c-1.278,1.795-2.225,3.894-2.834,6.288c-0.615,2.415-0.919,4.982-0.919,7.756h-22.55 C113.85,127.785,114.791,122.732,116.586,118.12z M162.536,183.938v23.616h-24.09v-23.616H162.536z"></path> </g> </g> </g> </g> </g></svg>
                    </button>
                </div>
                <div class="buttons">
                    <button>Get template</button>
                    <a href="#" role="link">
                        Preview
                        <svg style="width: 20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                    </a>
                </div>
            </div>

            <div class="type_plans">
                <div class="title">Plans & Plugins</div>
                <div class="line"></div>

                <div class="data">
                    <div class="icon">
                        <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1A2229"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9" stroke="#000000" stroke-width="1.416" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M14.5 9.08333L14.3563 8.96356C13.9968 8.66403 13.5438 8.5 13.0759 8.5H10.75C9.7835 8.5 9 9.2835 9 10.25V10.25C9 11.2165 9.7835 12 10.75 12H13.25C14.2165 12 15 12.7835 15 13.75V13.75C15 14.7165 14.2165 15.5 13.25 15.5H10.412C9.8913 15.5 9.39114 15.2969 9.01782 14.934L9 14.9167" stroke="#000000" stroke-width="1.416" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 8L12 7" stroke="#000000" stroke-width="1.416" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 17V16" stroke="#000000" stroke-width="1.416" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <div class="describtion">Does not require a paid plan</div>
                </div>

                <div class="data">
                    <div class="icon">
                        <svg fill="rgb(26, 34, 41)" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="-48.06 -48.06 576.70 576.70" xml:space="preserve" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="rgb(26, 34, 41)" stroke-width="9.131039"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.9611620000000001"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M365.158,480.574H240.668c-6.132,0-11.556-3.906-13.509-9.723c-1.962-5.811,0.012-12.212,4.926-15.912 c11.904-9.02,18.752-21.857,18.752-35.204c0-26.179-25.343-47.487-56.483-47.487c-31.141,0-56.483,21.309-56.483,47.487 c0,13.347,6.839,26.185,18.77,35.216c4.894,3.688,6.862,10.09,4.894,15.924c-1.948,5.793-7.376,9.705-13.503,9.705H23.531 c-7.861,0-14.254-6.395-14.254-14.256v-97.688c0-5.432,3.153-10.468,8.044-12.838c4.823-2.317,10.888-1.649,15.058,1.66 c5.539,4.381,11.272,6.603,17.026,6.603c23.141,0,42.691-33.769,42.691-73.736c0-39.975-19.544-73.749-42.691-73.749 c-5.411,0-10.796,1.963-16.021,5.84c-2.645,2.518-6.174,3.948-9.853,3.948c-7.861,0-14.254-6.398-14.254-14.253V107.428 c0-7.855,6.398-14.248,14.254-14.248h85.077c-3.632-7.578-5.503-15.652-5.503-23.924C103.104,31.064,144.04,0,194.355,0 s91.25,31.07,91.25,69.256c0,8.272-1.88,16.346-5.503,23.924h85.062c7.86,0,14.256,6.398,14.256,14.248v93.133 c7.224-3.257,14.86-4.938,22.639-4.938c38.184,0,69.244,40.938,69.244,91.256c0,50.312-31.066,91.244-69.244,91.244 c-7.778,0-15.415-1.678-22.639-4.936v93.137C379.409,474.186,373.025,480.574,365.158,480.574z M250.989,462.417h110.274V337.108 l14.954,12.685c7.844,6.662,16.774,10.173,25.842,10.173c28.171,0,51.093-32.781,51.093-73.087s-22.928-73.104-51.093-73.104 c-9.067,0-18.004,3.517-25.848,10.173l-14.96,12.688V111.332H242.764l13.595-15.144c7.246-8.074,11.076-17.389,11.076-26.938 c0-28.176-32.784-51.099-73.086-51.099c-40.305,0-73.092,22.922-73.092,51.099c0,9.549,3.83,18.864,11.083,26.938l13.595,15.144 H27.429v93.272c6.996-4.111,14.363-6.18,21.976-6.18c34.12,0,60.849,40.365,60.849,91.901s-26.729,91.9-60.849,91.9 c-7.619,0-14.986-2.081-21.976-6.183v86.374h110.277c-11.547-11.827-17.999-26.924-17.999-42.693 c0-36.187,33.481-65.64,74.641-65.64c41.157,0,74.641,29.447,74.641,65.64C268.99,435.487,262.536,450.59,250.989,462.417z"></path> </g> </g> </g></svg>
                    </div>
                    <div class="describtion">Does not require paid plugins</div>
                </div>
            </div>

            <div class="type_pupular">
                <div class="title">Popularity</div>
                <div class="line"></div>
                <div class="rating">
                    <div>
                        <div class="number">{{ analytic.right.typePopular.start }}</div>
                        <div class="text">Star rating</div>
                    </div>
                    <div>
                        <div class="number">{{ analytic.right.typePopular.install }}</div>
                        <div class="text">Installs</div>
                    </div>
                </div>
            </div>

            <div class="type_detail">
                <div class="title">Contributor details</div>
                <div class="line"></div>
                <div class="detail_content">
                    <div class="image">
                        <img :src="require(`../assets/images/${analytic.right.typeDetail.img}`)" alt="">
                    </div>
                    <div class="text">
                        <a href="#">{{ analytic.right.typeDetail.title }}</a>
                        <div class="date">
                            <div class="text">{{ analytic.right.typeDetail.date }}</div>
                            <div class="dot"></div>
                            <div class="text">{{ analytic.right.typeDetail.template }}</div>
                        </div>
                    </div>
                </div>
                <a class="detail_footer" href="#">
                    View contributor profile
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AnalyticDashboard',
    props: {
        analytic: Object
    },
    data () {
        return {
            image: this.analytic.left.images[0],
            i: 0
        }
    },
    methods: {
        Prew () {
            if (this.i == 0){
                this.i = this.analytic.left.images.length - 1;
            } else {
                this.i--;
            }
            this.image = this.analytic.left.images[this.i];
        },
        Next () {
            if (this.i == this.analytic.left.images.length - 1) {
                this.i = 0;
            } else {
                this.i++;
            }
            this.image = this.analytic.left.images[this.i];
        }
    }
}
</script>

<style>

</style>