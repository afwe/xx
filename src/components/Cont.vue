<template>
    <router-link to='' class="a">
    <div class="contest">
        <div class="left">
            <div class="left-top">
                <p v-if="conteststate===1" v-bind:class="{lfgreen:conteststate===2}">未开始</p>
                <p v-if="conteststate===2" v-bind:class="{lfgreen:conteststate===2}">比赛中</p>
                <p v-if="conteststate===3" v-bind:class="{lfgreen:conteststate===2}">已结束</p>
            </div>
            <div class="left-middle">
                <div class="ContestName">
                    {{contestname}}
                </div>
                <div class="ContestHolder">
                    {{contestholder}}
                </div>
                <div class="ContestTime">
                    {{contesttime}}
                </div>
            </div>
            <div class="left-bottom">
                 <div class="ContestType">
                     <h3 v-if="contesttype===1">IOI</h3>
                     <h3 v-if="contesttype===2">ACM</h3>
                     <h3 v-if="contesttype===3">OI</h3>
                </div>
                <div class="ContestPerson">
                    <h3 v-if="contestperson===1">团队公开赛</h3>
                    <h3 v-if="contestperson===2">个人公开赛</h3>
                    <h3 v-if="contestperson===3">团队秘密赛</h3>
                    <h3 v-if="contestperson===4">个人隐私赛</h3>
                </div>
            </div>
        </div>
        <div class="right">
        </div>
    </div>
    </router-link>
</template>
<script>
    export default{
        data(){
            return{
                conteststate: 2,
                contestname:'afwe',
                contestholder: 'afwe',
                contesttime: 'afwe',
                contesttype: 1,
                contestperson: 1
            }
        }
    }
</script>
<style scoped>
    .contest{
        height:180px;
        width:644px;
        background-color:ghostwhite;
        border-radius: 25px;
    }
    .left{
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
    .right{
        height:180px;
        width:350px;
        float:right;
        background:#fff url("1.png") no-repeat;
        background-size:100% 100%;  
    }

</style>