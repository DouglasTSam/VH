import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-color: #f2f2f2;
    margin:0;
    padding:0;
    box-sizing: border-box;
    width: 93%;
    margin-left: auto;
    margin-right: auto;
    font-family: Arial, Helvetica, sans-serif;
}

hr{
    height: 8px;
    background-color: black;
    margin-bottom: 15px;
}

h1{
    color: #037a96;
    font-size: 30px;
    font-family:'Roboto',sans-serif;
    font-weight: bold;
}

h3{
    transform: translateY(10px);
    font-size: 20px;
    
    font-weight: bolder;
    color:#ded892;
}

.contentCenter{
    display: flex;
    flex-direction: column;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
}

.topContainer{
    display: flex;
    flex-direction: row;
    width: 100%;
    
    >.subscription{
        width: 50%;
        animation: fadein 1.5s; // foi adicionada animação de fade-in no site para aparacer os textos e o footr

        @keyframes fadein {
            from {
                opacity:0;
            }
            to {
                opacity:1;
            }
        }

        @media screen and (max-width:991px){
            width: 95%;
        }

        >.infoText{
            width: 100%;
            color: #6e6e6e;
            font-size: 14px;
        }

        >.buttonContainer{
            display: flex;
            margin-top: 30px;
            flex-direction: column;
            animation: fadein 3s;

            @keyframes fadein {
            from {
                opacity:0;
            }
            to {
                opacity:1;
            }
}

            >.register{
                height:45px;
                background-color: #fe8f33;
                color: white;
                border-radius: 8px;
                border: none;
                margin-bottom: 15px;
                font-weight: bolder;
                cursor: pointer;

                :hover{
                    background-color: rgba(254,143,51,0.8);
                }   
            }

            >.downloadEdital{
                width:60%;
                margin-left: auto;
                margin-right: auto;
                height:45px;
                background-color: #c6c6c6;
                color: #4a4747;
                border-radius: 8px;
                border: none;
                font-weight: bolder;
                cursor: pointer;

                :hover{
                    background-color: rgba(198,198,198,0.5);
                }
            }

            @media screen and (min-width: 550px) {
                .register{
                    width: 50%;
                }

                .downloadEdital{
                    margin-right: 100%;
                    width:25%
                }
            }
        }
    }
    
    >.woman {
        display: flex;
        justify-content: center;
        align-items: center;

        div{
        width: 100%;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        animation: slideoff 2.5s; // na imagem foi adicionado outro efeito, o slide

        @keyframes slideoff {
            from { padding-right: 100%; } 
            to   { padding-right: -20%; }
        }
        
            img{
                width:95%;
            }
        }
    }
}

.footer{
    display: flex;
    padding-top: 20px;
    background-color: #1598b6;
    border-radius: 16px;
    color: rgba(240, 249, 255,0.8);
    margin-top: 110px;
    margin-bottom: 50px;
    animation: fadein 4s;

    .imageFooter{
        display: flex;
        align-self: center;
        justify-content: center;
        width: 30%;
    
        >img{
            width: 80%;
            height: 80%;
        }
    }

    >.listContainer{
        display: flex;
        flex-direction: column;

        >h1{
            margin-bottom: 30px;
            color:aliceblue;
            font-size: 30px;
        }

        >.listDivider{
        display: flex;
        justify-content:space-between;
        ;transform: translateY(-20px);

            >.leftList{
                >.gridContainer{
                    list-style: none;
                    padding:0;
                    

                    >li::before{
                        content: "▬";
                        width: 10px;
                        margin-right: 5px;
                        color:black;
                    }

                    >li:hover{
                        color:aliceblue;
                    }
                }
            }
            
            >.rightList{
                >.gridContainer{
                    list-style: none;

                    >li::before{
                        content: "▬";
                        width: 10px;
                        margin-right: 5px;
                        color:black;
                    }

                    >li:hover{
                        color:aliceblue;
                    }
                }
            }
        }

        @keyframes fadein {
            from {
                opacity:0;
            }
            to {
                opacity:1;
            }
        }

        @media screen and (max-width:600px){
            
            .listDivider{
                display: flex;
                flex-direction: column;
            }

            .rightList .gridContainer{
                justify-content: flex-start;
                padding-left: 0;
                margin-left: 0;
                transform: translateY(-16px);
            }
        }
    }
}
`;

export default GlobalStyle;
