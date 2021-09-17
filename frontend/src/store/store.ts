import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import MessageService from "../services/MessageService";

export default class Store {
  nameUser = "";
  getNodeMess = false;
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setNodeMess(bool: boolean) {
    this.getNodeMess = bool;
  }

  async login(name: string, password: string) {
    try {
      const response = await AuthService.login(name, password);
      console.log(response);
      localStorage.setItem("userId", String(response.data.id));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      console.log(e);
    }
  }

  async registration(name: string, password: string) {
    try {
      const response = await AuthService.registration(name, password);
      console.log(response);
      this.setAuth(true);
      localStorage.setItem("userId", String(response.data.id));
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      console.log(e);
    }
  }

  async addmessage(
    value: string,
    operation: string,
    masterId: string,
    parentId: string
  ) {
    try {
      await MessageService.addMessage(
        Number(value),
        operation,
        Number(masterId),
        Number(parentId)
      );
    } catch (e) {
      console.log(e);
    }
  }
}
