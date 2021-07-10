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
    display: grid;
    grid-template-columns: 50% 50%;
}

.infoText{
    width: 83%;
    color: #6e6e6e;
    font-size: 14px;
}

.woman{
    display: flex;
    justify-content: center;

    >img{
        width:90%;
        object-fit: contain;
    }
}

.buttonContainer{
    display: flex;
    margin-top: 30px;
    flex-direction: column;
}

.register{
    width: 50%;
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

.downloadEdital{
    width: 25%;
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

.footer{
    display: grid;
    padding-top: 20px;
    grid-template-columns: 30% auto;
    background-color: #1598b6;
    border-radius: 16px;
    color: rgba(240, 249, 255,0.8);
    padding-right: 10%;
    margin-top: 110px;
    margin-bottom: 50px;

    .imageFooter{
        display: flex;
        align-items: center;
        justify-content: center;
        >img{
            width: 70%;

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
        transform: translateY(-20px);

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
    }
}
`;

export default GlobalStyle;
