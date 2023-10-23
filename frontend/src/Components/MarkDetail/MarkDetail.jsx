import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from "rehype-raw"; // 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MarkDetailStyle } from "./MarkDetail.style";

const Code = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || "");

		return !inline && match ? (
			<SyntaxHighlighter
				style={xonokai}
				language={match[1]}
				PreTag='div'
				children={String(children).replace(/\n$/, "")}
				{...props}
			/>
		) : (
			<code className={className} {...props} />
		);
	},
};

function MarkDetail({ content }) {
	return (
		<MarkDetailStyle>
			<ReactMarkdown
				components={Code}
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw]}>
				{content}
			</ReactMarkdown>
		</MarkDetailStyle>
	);
}

export default MarkDetail;
