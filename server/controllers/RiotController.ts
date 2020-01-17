import * as express from 'express';
import * as environment from '../environment';
const request = require("request");

const API_KEY = environment.API_KEY;
export class RiotController{
    public router = express.Router();
    constructor(){
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get('/champion-rotation', this.getChampionRotation);
        this.router.post('/summoner-details', this.getSummonerDetails);
        this.router.post('/champion-masteries', this.getChampionMasteries);
    }

    private getChampionRotation = async (req, res, next) => {
        request({
            uri: `https://oc1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`
        }).pipe(res);
    }

    private getSummonerDetails = async (req, res, next) => {
        request({
            uri: `https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.body.summonerName}?api_key=${API_KEY}`
        }).pipe(res);
        console.log(res.error);
    }

    private getEncryptedSummonerId = async (summonerName: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            request({
                uri: `https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`
            }, (error, response, data) => {
                if(error){ console.log(error); reject(error);}
                console.log(data);
                resolve(JSON.parse(data).id);
            });
        });
    }

    private getChampionMasteries = async (req, res, next) => {
        console.log(API_KEY);

        let encryptedSummonerId = await this.getEncryptedSummonerId(req.body.summonerName);
        console.log(encryptedSummonerId);
        request({
            uri: `https://oc1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`
        }, (error, response, data) => {
            // console.log(error, response, data);
        }).pipe(res);
    }

}
