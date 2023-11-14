import { Request, Response } from 'express'
import ufs from './dados';


export function sigla(req:Request, res:Response){
    let {sigla} = req.params;
    sigla = sigla.toUpperCase();
    const uf = ufs.find(uf => uf.uf === sigla);
    if(uf){
        res.json(uf);
    }else{
        res.status(404).json({error:"UF não encontrada"});
    }
    res.send(uf);
}

export function ibge(req:Request, res:Response){
    const {ibge} = req.params;
    const uf = ufs.find(uf => uf.ibge === Number(ibge));
    if(uf){
        res.json(uf);
    }else{
        res.status(404).json({error:"IBGE não encontrado"});
    }
    res.send(uf);
}