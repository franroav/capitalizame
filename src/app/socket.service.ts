import { Injectable } from '@angular/core';
//NGX Socket
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
//import { Socket } from 'socket.io-client/build/socket';
//import { Socket } from 'ngx-socket-io';

@Injectable()
/*@Injectable({
  providedIn: 'root',
})*/
export class WebSocket {
  //constructor(private socketService: Socket) {}

  public socket = io('http://localhost:3000');
  public obs: Observable<any> = new Observable();

  getConexion() {
    let observable = new Observable<any>((observer) => {
      //event userdata
      this.socket.on('connection', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  getInitialData() {
    let observable = new Observable<{
      id: number;
      username: string;
      password: string;
      role: string;
      createdAt: string;
      updateAt: string;
    }>((observer) => {
      //event userdata
      this.socket.on('initial', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
    //return this.createObserver('initial');
  }
  /*getInit() {
        this.socket.on('this.socket.emit('join', data);', () => {
            
        });
    }*/
  getInitData() {
    /*let observable = new Observable<{
      id: number;
      username: string;
      password: string;
      role: string;
      createdAt: string;
      updateAt: string;
    }>((observer) => {
      //event userdata
      this.socket.on('initial', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;*/
    //return this.socket.emit('initial');
    //return this.createObserver('initial');
  }

  getUpdatedData() {
    let observable = new Observable<any>((observer) => {
      //event userdata
      this.socket.on('update', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
    // return this.createObserver('update');
  }

  joinRoom(data) {
    this.socket.emit('join', data);
  }
  newUserJoined() {
    let observable = new Observable<{ user: string; message: string }>(
      (observer) => {
        //event new user joined
        this.socket.on('new user joined', (data) => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );

    return observable;
  }

  leaveRoom(data) {
    this.socket.emit('leave', data);
  }

  userLeftRoom() {
    let observable = new Observable<{ user: string; message: string }>(
      (observer) => {
        //event new user joined
        this.socket.on('left room', (data) => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );

    return observable;
  }

  sendMessage(data) {
    this.socket.emit('message', data);
  }

  newMessageReceived() {
    let observable = new Observable<{ user: string; message: string }>(
      (observer) => {
        //event new user joined
        this.socket.on('new message', (data) => {
          observer.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
      }
    );

    return observable;
  }
  /*public onMessage(): Observable<any> {
    return fromEvent(this.socket, 'message');
  }*/
  /*private createObserver(event: string) {
    return this.socketService.emit(event);
    //  return this.socket.;
  }*/

  //public socket = io('http://localhost:3000');
  //this.socket
  /*public sock: Socket;

  getio() {
     this.sock.on('connection', (ressocket) => {

            ressocket.
          
      })
    // 7 this.sock.connect(('http://localhost:3000'));
  }*/
}
