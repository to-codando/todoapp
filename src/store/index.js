import { storeFactory } from "lemejs";
import { projectMustations } from "./mutations/project";
import { state } from "./state";

const mutations = {
	...projectMustations
}

export const store = storeFactory({
	state,
	mutations
})