import * as vscode from 'vscode';
import * as polka from "polka";
import { apiBaseUrl } from './constants';

export const authenticate = () => {
    const app = polka()
    
    app.get('/auth/:token', async (req, res) => {
        const { token } = req.params;
        if(!token) {
            res.end(`<h1>Something went wrong</h1>`)
        }
        console.log(token)

        res.end(`<h1>Auth successful. Close this window</h1>`)
    })
    app.listen(54321, (err: Error) => {
        if(err) {
            vscode.window.showErrorMessage(err.message)
        } else {
            vscode.commands.executeCommand(
                'vscode.open', 
                vscode.Uri.parse(`${apiBaseUrl}/auth/github`)
            )
        }
    })
}