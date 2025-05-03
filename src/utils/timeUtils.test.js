import { initializeTimes, updateTimes } from "./timeUtils";

describe("initializeTimes", () => {
    test("debería devolver los horarios iniciales correctos", () => {
        const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const result = initializeTimes();
        expect(result).toEqual(expectedTimes);
    });
});

describe("updateTimes", () => {
    test("debería devolver el mismo estado cuando se proporciona", () => {
        const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const action = { type: "UPDATE_TIMES", payload: "2025-05-01" };
        const result = updateTimes(initialState, action);
        expect(result).toEqual(initialState);
    });

    test("debería devolver el mismo estado para una acción desconocida", () => {
        const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const action = { type: "UNKNOWN_ACTION" };
        const result = updateTimes(initialState, action);
        expect(result).toEqual(initialState);
    });
});