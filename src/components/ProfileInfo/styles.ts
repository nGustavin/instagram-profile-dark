import styled from 'styled-components'

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 44px;

    .image-container{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        width: 291px;
        height: 198px;
        margin-right: 44px;

        img{
            height: 165px;
            border-radius: 50%;
            border: 5px solid #0d1117;
            box-shadow: 0px 0px 0px 2.5px rgba(255,255,255, 0.8);
            margin-top: 3px;
            cursor: pointer;
        }
    }

    .info-container{
        display: flex; 
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        
        *{
            background: none;
        }

        > .title{
            display: flex;
            align-items: center;
            justify-content: flex-start; 
            height: 40px;
            width: 100%;
            margin-bottom: 20px;
            
            h1{
                font-size: 28px;
                font-weight: 300;
                color: #f9f9f9;
            }

            > .title-buttons{
                width: 221px;
                height:30px;
                display: flex;
                margin-left: 20px;
                gap: 8px;
                color: #f9f9f9;

                .droplist{
                    height: 100%;
                    width: 34px;
                }

                button{
                    height: 100%;
                    width: 77px;
                    background: #21262d;
                    outline: none;
                    border: 1px solid rgba(0, 0, 0, 0.3);
                    padding:5px 9px;
                    border-radius: 4px;
                    overflow: hidden;
                    font-weight: 600;
                    font-size: 14px;
                    cursor: pointer;
                    color: #f9f9f9;
                }
                
            }

            
        }
        .statistics{
                display: flex;
                flex-direction: row;
                justify-content:flex-start;
                align-items: center;
                width: 100%;
                gap: 45px;
                margin-bottom: 20px;
                
                div{
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    >h2{
                        font-weight: 600;
                        font-size: 16px;
                        color: #f9f9f9;
                    }
                    >span{
                        font-weight: 400;
                        font-size: 16px;
                        color: #f9f9f9;
                    }
                }
        }

        >.description{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
            height: 100px;
            margin-bottom: 44px;

            h2{
                font-weight: 600;
                font-size: 16px;
                margin-bottom: 4px;
                color: #f9f9f9;

            }

            span a{
                text-decoration: none;
                color: #00376b;
            }
            span{
                font-size: 16px;
                margin-bottom: 13px;
                color: #f9f9f9;

            }

            h3{
                font-size: 12px;
                font-weight: 500;
                color: #a2a2a2;

                span{
                font-size: 12px;
                cursor: pointer;
                }
            }
            
        }
    }
`