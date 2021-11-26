import Api from '../../Api';
import {define} from '../../helpers/redux-request';

//Patients Modals

export const ADD_PATIENT_TOGGLE_MODAL = "ADD_PATIENT_TOGGLE_MODAL";
export function addPatientToggleModal(addPatientModalShow) {
    return {
        type: ADD_PATIENT_TOGGLE_MODAL,
        payload: {
            addPatientModalShow
        }
    }
}
export const INFO_PATIENT_TOGGLE_MODAL = "INFO_PATIENT_TOGGLE_MODAL";
export function infoPatientToggleModal(infoPatientModalShow,patient) {
    return {
        type: INFO_PATIENT_TOGGLE_MODAL,
        payload: {
            infoPatientModalShow,
            patient
        }
    }
}
export const EDIT_PATIENT_TOGGLE_MODAL = "EDIT_PATIENT-TOGGLE_MODAL";
export function editPatientToggleModal(editPatientModalShow,patient) {
    return {
        type:EDIT_PATIENT_TOGGLE_MODAL,
        payload: {
            editPatientModalShow,
            patient
        }
    }
}

//Patients Requests


export const ADD_PATIENT = define("ADD_PATIENT");
export function registerPatient(formData) {
    return ADD_PATIENT.request(() => Api.registerPatient(formData)).takeLatest()
}

export const EDIT_PATIENT = define("EDIT_PATIENT");
export function editSinglePatient(formData) {
    return EDIT_PATIENT.request(() => Api.editSinglePatient(formData)).takeLatest()
}
export const DELETE_PATIENT = define("DELETE_PATIENT");

export function deleteSinglePatient(id) {
    return DELETE_PATIENT.request(() => Api.deleteSinglePatient(id)).takeLatest()
}

export const GET_ALL_PATIENTS = define("GET_ALL_PATIENTS");
export function getPatientByClinic(clinicId) {
    return GET_ALL_PATIENTS.request(() => Api.getPatientByClinic(clinicId)).takeLatest()
}





