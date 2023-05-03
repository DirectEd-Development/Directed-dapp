import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<script src="https://tally.so/widgets/embed.js"></script>
				</Head>
				<body>
					<Main />
					<div id='modal-root'></div>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
