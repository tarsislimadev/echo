import { HTML } from '@brtmvdl/frontend'

export class Page extends HTML {
  state = { socket: io(), }

  onCreate() {
    super.onCreate()
    this.setText('page')
    this.state.socket.on('message', console.log)
    this.append(this.getButton())
  }

  getButton() {
    const html = new HTML()
    html.setText('click here')
    html.on('click', () => this.state.socket.emit('message', Date.now()))
    return html
  }
}
