# Phrase Wave フロントエンド

## アプリケーション概要
Phrase Waveは、言語学習者のためのWebアプリケーションです。ユーザーが覚えたい単語を組み合わせて、自分に合った例文を生成することができます。

URL: https://phrasewave.com/

※現バージョンでは単純に入力した単語を組み合わせて例文を生成し、保存をすることしかできませんが、今後のバージョンではユーザーのプロフィールに合わせた例文の生成、過去に学んだ単語が復習できるように、新たな例文生成時に組み込むことができるように機能を追加していきます。

## デモアカウント
アプリケーションをすぐに試していただけるよう、以下のデモアカウントをご用意しています：

- メールアドレス: demo@phrasewave.com
- パスワード: demoPass123

※このアカウントは定期的にリセットされます。個人情報の入力はお控えください。


## 開発背景
開発者自身の語学学習経験から生まれたアイデアです。新出単語を組み合わせて例文を作成し覚えるという学習方法を、生成系AIを活用してより効率的に行えるようにすることを目指しました。


## 主要機能
- カスタム例文生成：ユーザーが選択した単語を使用して、AIが例文を生成
- マイフレーズ保存：生成された例文をユーザーごとに保存可能

## サービス画面･機能の説明

### ログイン･登録画面
|ログイン|サインアップ|
|----|----|
|![ログイン](/docs/images/phrasewave-login.png)|![サインアップ](/docs/images/phrasewave-signup.png)|
|Laravel Breeze Next.jsを使って実装||

### generateページ
|単語入力|生成された例文表示|
|----|----|
|![単語入力](/docs/images/phrasewave-generate-input.png)|![生成された例文表示](/docs/images/phrasewave-generate-generated.png)|
|学び単語を入力します。左側が単語･熟語、右側にその表現が利用される文脈です。|Generate Your Phrasesボタンを押すとOpen AI APIにリクエストがされて生成AIが作った例文が返されます。Saveボタンを押すとMyphrasesに単語とフレーズが保存されます。|

<br />

### Myphrasesページ
|保存した単語･フレーズの表示||
|----|----|
|![タイムカード](/docs/images/phrasewave-myphrases.png)||
|保存したフレーズを単語ごとに見ることができます。||

## サーバー構成
![AWS構成図](/docs/images/phrasewave-aws.png)


## 技術スタック

### フロントエンド
- フレームワーク: Next.js (v14.2.3)
- 言語: TypeScript
- スタイリング: Tailwind CSS (v3.4.3)
- コンポーネントライブラリ: shadcn/ui
- フォーム管理: React Hook Form (v7.52.1)
- バリデーション: Zod (v3.23.8)


### バックエンド
- 言語: PHP 8.2+
- フレームワーク: Laravel 11.x
- AI 統合: OpenAI PHP SDK for Laravel (openai-php/laravel ^0.10.1)


### インフラストラクチャ
- クラウドプラットフォーム: AWS (Amazon Web Services)
- フロントエンドホスティング: AWS Amplify
- コンテナ化: Docker
- データベース: Amazon RDS
- 仮想プライベートクラウド (VPC)
  - パブリックサブネット
  - プライベートサブネット
- ロードバランシング: Elastic Load Balancer (ELB)
- コンピューティング: Amazon EC2
- ドメイン管理・DNS: Amazon Route 53

## デプロイメント
- AWS Amplifyを使用してデプロイ

## 今後の開発予定
- Myphraseの削除機能
- アカウントの削除機能
- 単語帳機能
- 例文音声読み上げ機能
- 例文、単語翻訳機能
- ユーザープロフィールに基づいたカスタム例文生成機能


## ライセンス
本プロジェクトは、ポートフォリオとしての閲覧および評価目的でのみ公開されています。
複製、再配布、または商業利用は許可されていません。詳細は[LICENSE.md](LICENSE.md)ファイルをご覧ください。
