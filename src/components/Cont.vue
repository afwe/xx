<template>
    <div class="contest">
        <router-link to='' class="a">
        <div class="right">
        </div>
        <div class="left">
            <div class="left-top">
                <p v-if="conteststate===1" v-bind:class="{lfgrey:conteststate===1}">未开始</p>
                <p v-if="conteststate===2" v-bind:class="{lfgreen:conteststate===2}">比赛中</p>
                <p v-if="conteststate===3" v-bind:class="{lfred:conteststate===3}">已结束</p>
            </div>
            <div class="left-middle">
                <div class="ContestName">
                    {{contestname}}
                </div>
                <div class="ContestHolder">
                    {{contestholder}}
                </div>
                <div class=ContestTIme>
                <div class="clock"></div>
                <div class="ContestTime">
                    {{contesttime}}
                </div>
                </div>
            </div>
            <div class="left-bottom">
                 <div class="ContestType">
                     <div v-if="contesttype===1">IOI</div>
                     <div v-if="contesttype===2">ACM</div>
                     <div v-if="contesttype===3">OI</div>
                </div>
                <div v-if="israted===1" class="rated">Rated</div>
                <div class="ContestPerson">
                    <div v-if="contestperson===1" v-bind:class="{CPblue:contestperson===1}">团队公开赛</div>
                    <div v-if="contestperson===2" v-bind:class="{CPorange:contestperson===2}">个人公开赛</div>
                    <div v-if="contestperson===3" v-bind:class="{CPblack:contestperson===3}">官方</div>
                    <div v-if="contestperson===4">隐私训练赛</div>
                </div>
            </div>
        </div>
        </router-link>
    </div>
    
</template>
<script>
    export default{
        data(){
            return{
                conteststate: 2,
                contestname:'afwe',
                contestholder: 'afwe',
                contesttime: 'afwe',
                contesttype: 2,
                contestperson: 3,
                israted:1
            }
        }
    }
</script>
<style scoped>
    .a{
        height:130px;
        width:369.07px;
    }
    .contest{
        height:130px;
        width:369.07px;
        background-color:ghostwhite;
        border-radius: 25px;
    }
    .right{
        position:relative;
        border-top-right-radius: 25px;
        border-bottom-right-radius:25px;
        height:130px;
        width:200px;
        float:right;
        background:#fff url("2.png") no-repeat;
        background-size:100% 100%;  
    }
    .left{
        position:relative;
        top:-130px;
        background:linear-gradient(-105deg, transparent 20%, white 0);
        height:100%;
        width:60%;
        display:flex;
        flex-flow:column;
    }
    .left-top{
        height:17%;
        width:25%;
        align-self: flex-start;
    }
    .lfgrey{
        font-size:70%;
        text-align:center;
        line-height:190%;
        border-radius:25% 0px 20px;
        color:black;
        background-color:grey;
        height:100%;
        width:100%;
    }
    .lfgreen{
        font-size:70%;
        text-align:center;
        line-height:190%;
        border-radius:25% 0px 20px;
        color:white;
        background-color:rgb(16, 221, 84);
        height:100%;
        width:100%;
    }
    .lfred{
        font-size:70%;
        text-align:center;
        line-height:190%;
        border-radius:25% 0px 20px;
        color:black;
        background-color:red;
        height:100%;
        width:100%;
    }
    .left-middle{
        margin-top:2%;
        display:flex;
        flex-flow:column;
        align-self:flex-start;
        text-align:left;
        height:60%;
        width:100%;
        margin-left: 7%;
    }
    .ContestName{
        color: #313131 ;
        font-size:100%;
        line-height:100%;
        height:20%;
        width:100%;
    }
    .ContestHolder{
        margin-top:5%;
        color: #CCCCCC ;
        font-size:95%;
        line-height:100%;
        height:25%;
        width:100%;
    }
    .ContestTIme{
        display:flex;
        margin-top:3%;
        color: #CCCCCC ;
        font-size:95%;
        line-height:100%;
        width:100%;
        height:25%;
    }
    .ContestTime{
        color: #CCCCCC ;
        font-size:95%;
        line-height:100%;
        width:100%;
        height:80%;
        margin-left:3%;
    }
    .clock{
        height:70%;
        width:7%;
        background:url("3.png") no-repeat;
        background-size:100% 100%;  
    }
    .left-bottom{
        display:flex;
        flex-flow:row;
        height:13%;
        width:100%;
        margin-top:3%;
        margin-left:7%;
    }
    .ContestType{
        color:#FFFFFF;
        background-color:#FFB916;
        height:95%;
        width:15%;
        font-size:80%;
        line-height:140%;
        border-radius:30px;
    }
    .rated{
        color:#FFFFFF;
        background-color:#07C793;
        height:95%;
        width:22%;
        font-size:80%;
        line-height:140%;
        border-radius:30px;
        margin-left:4%;
    }
    .CPblue{
        color:#FFFFFF;
        background-color: #009DFF ;
        margin-left:10%;
        height:95%;
        width:120%;
        font-size:80%;
        line-height:130%;
        border-radius:30px;
    } 
    .CPorange{
        color:#FFFFFF;
        background-color: #FF7F00 ;
        margin-left:10%;
        height:95%;
        width:120%;
        font-size:80%;
        line-height:130%;
        border-radius:30px;
    }
    .CPblack{
        color:#FFFFFF;
        background-color: #474773 ;
        margin-left:30%;
        height:95%;
        width:150%;
        font-size:80%;
        line-height:130%;
        border-radius:30px;
    } 
    
    /*.ContestName{
        align-self: center;
        color:black;
        height:20%;
        width:80%;
        background-color:blue;
        justify-content:flex-end;
    }
    /*.left{
        float:left;
    }
    .left-top{
        color:white;
        height:30px;
        width:80px;
        border-radius:15px 0px 25px;
        background-color:grey;
        font-size:10px;
        text-align:center;
        line-height:30px;
        float: left;
    }
    .lfgrey{
        height:30px;
        width:80px;
        border-radius:15px 0px 25px;
        background-color:grey;
        font-size:10px;
        text-align:center;
        line-height:30px;
        float: left;
    }
    .lfgreen{
        height:30px;
        width:80px;
        border-radius:15px 0px 25px;
        background-color:rgb(16, 221, 84);
        font-size:10px;
        text-align:center;
        line-height:30px;
        float: left;
    }
    .left-middle{
        float:left;
        margin-top:30px;
        margin-left:-60px;
    }
    .ContestName{
        color:black;
        float:left;
        margin-top:10px;
        height:20px;
        width:200px;
        text-align:left;
    }
    .ContestHolder{
        color:grey;
        float:left;
        margin-top:40px;
        margin-left:-200px;
        height:20px;
        width:200px;
        text-align:left;
    }
    .ContestTime{
        color:grey;
        float:left;
        margin-top:70px;
        margin-left:-200px;
        height:20px;
        width:200px;
        text-align:left;
    }
    .left-bottom{
        font-size:15px;
        float:left;
        margin-top:140px;
        margin-left:-200px;
    }
    
    .ContestType{
        color:white;
        width:50px;
        height:20px;
        line-height:20px;
        border-radius:10px;
        background-color:#FFCC00;
        text-align:center;
        float:left;
    }
    .ContestPerson{
        color:white;
        margin-left:40px;
        line-height:20px;
        background-color:#0099FF;
        border-radius:10px;
        height:20px;
        width:100px;
        text-align:center;
        float:left;
    }
    */
</style>