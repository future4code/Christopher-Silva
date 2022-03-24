import { DogWalking } from "../../src/model/DogWalking";
import { walkMockCompleto, walkMockFinalizado, walkMockIniciado, walkMockInvalido, walkMockPasseando, walkMockPendente, walkMockStart, walkMockValido } from "./walkMock";


export class DogWalkerDataBaseMock{
    private toModel(dbModel?: any): DogWalking | undefined {
        return (
           dbModel &&
           new DogWalking(
              dbModel.id,
              dbModel.date,
              dbModel.price,
              dbModel.duration,
              dbModel.latitude,
              dbModel.longitude,
              dbModel.numberOfPets,
              dbModel.startTime,
              dbModel.endTime
           )
        );
     }
    public async creat(idWalk:string, startWalk:string): Promise<void> {}
    public async startWalk(walk: DogWalking): Promise<void> {}
    public async finishWalk(walk: DogWalking): Promise<void> {}

    public async getWalkById(id: string): Promise<void|any> {
        if(id === "status_pendente"){
            return walkMockPendente
        }else if(id === "status_passeando"){
            return walkMockPasseando
        }else if(id === "id_valido"){
            return walkMockValido
        }else if(id === "id_invalido"){
            return walkMockInvalido
        }else if(id === "id_iniciado"){
            return walkMockIniciado
        }else if(id === "id_finalizado"){
            return walkMockFinalizado
        }else if(id === "id_pendente"){
            return walkMockPendente
        }else if(id === "id_start_valido"){
            return walkMockStart
        }else{
            undefined
        }
    }
    
    public async walksByPage(): Promise<any[]> {
        return [walkMockCompleto]
    }

    public async allWalks(): Promise<any[]> {
        return [walkMockCompleto]
    }
}