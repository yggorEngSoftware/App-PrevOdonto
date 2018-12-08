import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../Config/api.config";
import { Observable } from "rxjs/Rx";
import { AtendimentoDTO } from "../../models/atendimentos.dto";




@Injectable()
export class AtendimentoService {
    constructor(public http: HttpClient) {
    }
     
    findAll(cpf: string): Observable<AtendimentoDTO[]> {
        return this.http.get<AtendimentoDTO[]>(`${API_CONFIG.baseUrl}/atendimentos/cpf?cpf=${cpf}`);
    }
    deletar(id: string){
        return this.http.delete(`${API_CONFIG.baseUrl}/atendimentos/${id}`);
    }
}