

export class ExerciciosDataBaseMock {

    public ex1(test: String): number[] {

        let array = []

        if (test === "falta numero") {
            array = [1, 2, 3, 4, 5, 6, 8]

        } else {
            array = [1, 2, 3, 4, 5, 6, 7, 8]

        }

        return array
    }

}