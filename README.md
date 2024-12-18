# <div align="center"><img src="./assets/header.svg" alt="Dice Roller" width="400"/></div>

## 🎲 dice-server

このMCPサーバーはサイコロを振る機能を提供します。

### 🛠️ ツール

- **roll_dice**: サイコロを振ります。
  - `sides`: サイコロの面数を指定できます（デフォルトは6）。

### ⚙️ 使用方法1

このサーバーは、MCPクライアントから`roll_dice`ツールを呼び出すことで使用できます。

例：

```json
{
  "server_name": "dice-server",
  "tool_name": "roll_dice",
  "arguments": {
    "sides": 6
  }
}
```

この例では、6面のサイコロを振ります。

### ⚙️ 使用方法2

作成したMCPサーバーは以下のように使用できます：

#### インストール：

```
npm install @tetumemo/dice-server
```

#### Claude.appの設定ファイルに追加：

```json
{
  "mcpServers": {
    "dice": {
      "command": "dice-server",
      "env": {}
    }
  }
}
```

##### Window:

```json
{
  "mcpServers": {
    "dice": {
      "command": "node",
      "args": [
        "C:\\Users\\your_name\\node_modules\\dice-server\\build\\index.js"
      ]
    }
  }
}
```

#### Claudeでの使用例：

```
roll_diceツールを使用して、6面ダイスを2個振ってください。
```

### 📝 コミットメッセージ形式

コミットメッセージは以下の形式に従うこと:

```
<絵文字> <タイプ>: <タイトル>
<本文>
<フッター>
```

- タイトル（コミットメッセージの1行目）の先頭には必ず絵文字を付与し、日本語で記述すること。
- タイプは以下のいずれかとする：
  - **feat**: 新機能
  - **fix**: バグ修正
  - **docs**: ドキュメントの変更
  - **style**: コードスタイルの変更（動作に影響しない）
  - **refactor**: リファクタリング
  - **perf**: パフォーマンス改善
  - **test**: テストの追加・修正
  - **chore**: ビルドプロセスやツールの変更

### 📜 ライセンス

このプロジェクトはMITライセンスの下で提供されています。
