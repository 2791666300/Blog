import styled from "styled-components";
import Colors from "../../constants/Colors";

export const MarkDetailStyle = styled.div`
	font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
	line-height: 2;

	box-sizing: border-box;
	padding: 10px 14px;

	font-size: 16px;
	p,
	blockquote,
	ul,
	ol,
	dl,
	pre {
		margin-top: 0;
		margin-bottom: 0.6em;
	}

	p {
		margin: 2rem 0 1rem 0;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		padding: 0;
		margin-top: 2rem;
		font-weight: 600;

		text-indent: 0;

		&:target {
			padding-top: 4.5rem;
		}
	}
	h1,
	h2 {
		margin-top: 4rem;
		border-bottom: 1px solid #6b6b6b;
	}
	a {
		color: #0366d6;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	ul,
	ol {
		padding: 0.2em 0.8em;

		> li {
			line-height: 2;
			padding-left: 0.2em;
			margin-left: 0.2em;
			list-style-type: disc;

			> p {
				text-indent: 0;
			}

			> ul {
				&:last-child {
					margin-bottom: 0;
				}

				li {
					list-style-type: circle;

					> ul li {
						list-style-type: square;
					}
				}
			}
		}
	}

	> ul,
	ol {
		padding: 0 20px;
	}

	ol > li {
		list-style-type: decimal;
	}

	blockquote {
		margin: 2rem 0;
		margin-bottom: 0.6em;
		padding: 1em;

		color: #6a737d;
		background-color: ${Colors.color_black_1};
		border-left: 0.25em solid #dfe2e5;

		p {
			text-indent: 0;

			&:first-child {
				margin-top: 0;
			}

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	pre {
		padding: 0.6em;
		overflow: auto;
		line-height: 1.6;
		background-color: ${Colors.color_black_1};
		border-radius: 3px;
	}

	hr {
		margin-bottom: 0.6em;
		height: 1px;
		background: #dadada;
		border: none;
	}

	table {
		width: 100%;
		border: 1px solid #ddd;
		margin-bottom: 0.6em;
		border-collapse: collapse;
		text-align: left;

		thead {
			background: #eee;
		}

		th,
		td {
			padding: 0.1em 0.4em;
			border: 1px solid #ddd;
		}
	}

	img {
		display: block;
		margin: 0 auto;
		max-width: 100%;
		margin-bottom: 0.6em;
	}
`;
