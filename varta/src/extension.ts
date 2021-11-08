import * as vscode from 'vscode';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "varta" is now active!');

	const sidebarProvider = new SidebarProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
		  "varta-sidebar",
		  sidebarProvider
		)
	  );
  
	context.subscriptions.push(
		vscode.commands.registerCommand('varta.helloWorld', () => {
			vscode.window.showInformationMessage('Hello World from varta!');
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('varta.refresh', async () => {
			await vscode.commands.executeCommand("workbench.action.closeSidebar")
			await vscode.commands.executeCommand("workbench.view.extension.varta-sidebar-view")
		})
	);
}

export function deactivate() {}
