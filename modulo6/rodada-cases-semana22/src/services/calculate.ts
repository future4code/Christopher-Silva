
import { DogWalkInputDTO } from "../model/DogWalking";

export class Calculate {
    public price = async (duration: Number, numberOfPets: any): Promise<any> => {
        if (duration === 30) {
            if (numberOfPets === 1) {
                return 25
            } else {
                return 25 + 15 * (numberOfPets - 1)
            }
        } else if (duration === 60) {
            if (numberOfPets === 1) {
                return 35
            } else {
                return 35 + 20 * (numberOfPets - 1)
            }
        }
    }

    public time = async (startWalk: string[], finishWalk: string[]): Promise<any> => {
        const startHour = parseInt(startWalk[0])
        const startMin = parseInt(startWalk[1])
        const finishHour = parseInt(finishWalk[0])
        const finishMin = parseInt(finishWalk[1])

        if (startHour === finishHour) {
            const time = finishMin - startMin
            return time
        } else if (startHour !== finishHour) {
            const time = (60 - startMin) + finishMin
            return time
        }
    }

    public timeFinish = async (startWalk: String, finishWalk: String): Promise<any> => {
        const startHour = parseInt(startWalk[0])
        const startMin = parseInt(startWalk[1])
        const finishHour = parseInt(finishWalk[0])
        const finishMin = parseInt(finishWalk[1])

        if (startHour === finishHour) {
            const time = finishMin - startMin
            return time
        } else if (startHour !== finishHour) {
            const time = (60 - startMin) + finishMin
            return time
        }
    }
}


