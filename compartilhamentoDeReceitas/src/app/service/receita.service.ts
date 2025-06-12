import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receita } from '../models/receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private readonly API_URL = 'http://localhost:3000/receitas';

  constructor(private http: HttpClient) {}

  pegarTudo(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.API_URL);
  }

  pegarPorId(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.API_URL}/${id}`);
  }

  criar(receita: Receita): Observable<Receita> {
    return this.http.post<Receita>(this.API_URL, receita);
  }

  atualizar(id: number, receita: Receita): Observable<Receita> {
    return this.http.put<Receita>(`${this.API_URL}/${id}`, receita);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
