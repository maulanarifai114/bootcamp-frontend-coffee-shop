<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}

.btn-auth {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  height: 75px;
  border-radius: 20px;
  outline: none;
  border: none;
  transition: .3s;
  margin: 0 0 26px 0;
}

.btn-auth:focus {
  outline: none;
}

.btn-auth:hover {
  opacity: .8;
}

.btn-brown {
  background: #6A4029!important;
  color: #FFFFFF;
  box-shadow: 0 6px 20px 0  rgba(106, 64, 41, 0.4);
}

.btn-yellow {
  background: #FFBA33!important;
  color: #6A4029;
  box-shadow: 0 6px 20px 0  rgba(255, 187, 51, 0.4);
}

.btn-white-auth {
  background: #ffffff!important;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  height: 75px;
  border-radius: 20px;
  outline: none;
  border: none;
  transition: .3s;
  margin: 0 0 62px 0;
  color: #000000;
  box-shadow: 0 6px 20px 0 rgba(196, 196, 196, 0.67)
}

.btn-white-auth:focus {
  outline: none;
}

.btn-white-auth:hover {
  opacity: .8;
}

</style>
