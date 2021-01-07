import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.jpg';


export default createGlobalStyle`
* {
  font-family: 'Viga', sans-serif;
  font-size: 14px;
}

body, html {
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(26,27,31);
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @-moz-keyframes fadeIn {
  0% { opacity: 0;}
  100% { opacity: 1; }
  }
  @-o-keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }

  .fadeIn-slow {
    -webkit-animation: fadeIn 5s ease-in-out;
    -moz-animation: fadeIn 5s ease-in-out;
    -o-animation: fadeIn 5s ease-in-out;
    animation: fadeIn 5s ease-in-out;
    }

    .fadeIn-fast {
      -webkit-animation: fadeIn 2s ease-in-out;
      -moz-animation: fadeIn 2s ease-in-out;
      -o-animation: fadeIn 2s ease-in-out;
      animation: fadeIn 2s ease-in-out;
      }
      .fadeIn-fast-fast {
        -webkit-animation: fadeIn 1s ease-in-out;
        -moz-animation: fadeIn 1s ease-in-out;
        -o-animation: fadeIn 1s ease-in-out;
        animation: fadeIn 1s ease-in-out;
        }


.characterSearchBar {
  width: 100%;
}

span {
  font-size: 50px;
}

.pink {
  color: pink;
}

.gold {
  color: gold;
}

p span {
  font-size: 18px;
}

.sectionBeco {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

Nav a {
  text-decoration: none;
  color: white;
  font-size: 30px;
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0.6;
  transition: 0.3s;
}

Nav a:hover{
  text-decoration: none;
  color: white;
  opacity: 1;
}

.imgLogo {
  width: 180px;
  height: 80px;
}

/* Characters List */
.div-characters-list {
  margin-top: 30px;
}

.div-characters-list ul {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.div-characters-list li {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  list-style-type: none;
  color: white;
}

.div-characters-list li img {
  background-color: rgba(128, 128, 128, 0.103);
  cursor: pointer;
  border: 1px solid white;
  width: 170px;
  height: 231px;
  opacity: 0.6;
  transition: 0.3s;
}

.div-characters-list li img:hover {
  cursor: pointer;
  opacity: 1;
}

h1.infoCharName{
  color: white;
}

.character-name{
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  position: relative;
  margin-top: -35px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
}

/* About character */
/* Rodapé */
.footer-clean {
  position: relative;
  width: 100%;
  bottom: 0;
  padding:50px 0;
  background-color:#fff;
  color:#4b4c4d;
}

.footer-clean h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

.footer-clean ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

.footer-clean ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-clean ul a:hover {
  opacity:1;
}

.footer-clean .item.social {
  text-align:right;
}

@media (max-width:767px) {
  .footer-clean .item {
    text-align:center;
    padding-bottom:20px;
  }
}

@media (max-width: 768px) {
  .footer-clean .item.social {
    text-align:center;
  }
}

.footer-clean .item.social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin-left:10px;
  margin-top:22px;
  color:inherit;
  opacity:0.75;
}

.footer-clean .item.social > a:hover {
  opacity:0.9;
}

@media (max-width:991px) {
  .footer-clean .item.social > a {
    margin-top:40px;
  }
}

@media (max-width:767px) {
  .footer-clean .item.social > a {
    margin-top:10px;
  }
}

.footer-clean .copyright {
  margin-top:14px;
  margin-bottom:0;
  font-size:13px;
  opacity:0.6;
}

.min-height {
  min-height: 65.70vh;
  margin-bottom: 20px;
}

div.card-deck {
  margin-top: 70px;
}

.box-text{
  text-align: center;
  color: white;
  transition: width 2s;
}

.box-characters-list{
  position: relative;
  width: 100%;
  height: 100px;
}

.box-img {
  width: 100%;
  height: 150px;
}

div.characterName {
  border: 1px solid cyan;
}

div.charStats {
  border: 1px solid white;
}

div.builds {
  border: 1px solid blue;
  color: white;
}

div.ads {
  border: 1px solid yellow;
  color: white;
}
`;
