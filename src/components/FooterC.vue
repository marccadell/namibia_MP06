<script setup>
import FooterLinks from "@/components/FooterLinks.vue";
import SocialIcons from "@/components/Social-Icons.vue";
</script>

<template>
    <footer>
        <FooterLinks>
            <template #link>
                <a href="#" class="footer-link">Inicio</a>
                <a href="#" class="footer-link">Ropa</a>
                <a href="#" class="footer-link">Calzado</a>
                <a href="#" class="footer-link">Complementos</a>
                <a href="#" class="footer-link">Contacto</a>
            </template>
        </FooterLinks>
        <SocialIcons>
            <template #link>
                <a href="#"><img class="social-img" src="../assets/tiktok.png" /></a>
                <a href="#"><img class="social-img" src="../assets/instagram.png" /></a>
                <a href="#"><img class="social-img" src="../assets/linkedin.png" /></a>
            </template>
        </SocialIcons>
        <div class="footer-info">
            <p>NAMIBIA - Ropa de Mujer 2022 Todos los derechos reservados</p>
        </div>
  </footer>
</template>

<style>
    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        background-color: rgb(199, 199, 199);
        height: 25vh;
        border: 2px dashed red;
    }

    .footer-info {
        margin: 30px 0 10px;
        color: #373737;
    }

    .footer-link {
        margin: 0 20px;
        text-decoration: none;
        color: #373737;
    }

    .social-img {
        margin: 0 10px;
    }
</style>