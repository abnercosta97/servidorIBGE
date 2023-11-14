import { Router, Request, Response } from "express";
import { ibge, sigla } from "../controllers/UfController";

const routes = Router();


routes.get("/uf/sigla/:sigla", sigla);
routes.get("/uf/ibge/:ibge", ibge);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );


export default routes;
