const axios = require('axios');
const { Pokemon, Type } = require('../../db');


const getAllTeams = async()=>{
    const teams = await axios.get("https://www.balldontlie.io/api/v1/teams");
    return teams.data;

}

const getTeam = async(id)=>{
    const team = await axios.get(`https://www.balldontlie.io/api/v1/teams/${id}`);
    console.log(team)
    return team.data;

}

module.exports = {getAllTeams,getTeam}