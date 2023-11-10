import { useCallback, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { message, Input } from "antd";
import Editor from "for-editor";
import { TableOutlined, IdcardOutlined } from "@ant-design/icons";

import { selectorCurrentUser } from "../../Store/users/user.selector";
import { selectorArticles } from "../../Store/articles/articles.selector";
import {
	CreatorEditorContainer,
	EditorContainer,
	CategoryLable,
} from "./CreatorEditor.style";
import Button, {
	BUTTON_TYPE_CLASSES,
} from "../../Components/Button/button-component";
import { useNavigate, useParams } from "react-router-dom";

const CreatorEditor = (props) => {
	const navigate = useNavigate();
	const { articleId } = useParams();
	const articles = useSelector(selectorArticles);

	const currentArticle = articles?.find((item) => item.id === articleId);

	const [value, setValue] = useState(
		!!currentArticle ? currentArticle.article : localStorage.getItem("article"),
	);
	const [category, setCategory] = useState(
		articleId ? currentArticle.category.join(",") : "",
	);
	const [label, setLabel] = useState(
		articleId ? currentArticle.label.join(",") : "",
	);

	const handleChange = (va) => {
		setValue(va);
	};

	const [messageApi, contextHolder] = message.useMessage();
	const currentUser = useSelector(selectorCurrentUser);

	const addImg = useCallback(
		async (file) => {
			const form = new FormData();
			form.append("img", file);
			const res = await axios({
				method: "POST",
				url: "http://localhost:80/api/v1/articles/addimg",
				data: form,
			});
			if (res.data.status === "success") {
				messageApi.open({
					type: "success",
					content: "图片上传成功！！",
				});
			}
			const url =
				"http://localhost:80/" +
				res.data.replace(/^public\\/, "").replace(/\\/g, "/");

			setValue((v) => v + `\n![${res.data}](${url})`);
		},
		[messageApi],
	);

	const SaveHandle = async (article) => {
		messageApi.open({
			type: "success",
			content: "保存成功！！",
		});
		localStorage.setItem("article", article);
	};

	const releaseHandle = async () => {
		const primaryTitle = value.match(/^#.*/gm)[0].split(" ")[1];
		const introduction = value.match(/^>.*/gm)[0].split(" ")[1];
		const coverImg = value.match(/^!\[public.*/gm)[0].match(/http.*g/)[0];
		const data = {
			primaryTitle,
			introduction,
			label: label.split(","),
			category: category.split(","),
			user: currentUser._id,
			coverImg,
			article: value,
		};
		if (!articleId) {
			try {
				const res = await axios({
					method: "POST",
					url: "http://localhost:80/api/v1/articles",
					data: data,
				});

				if ((res.data.status = "success")) {
					messageApi.open({
						type: "success",
						content: "发布成功！！",
					});
					setTimeout(() => {
						navigate(`/navi/articles/`);
					}, 1500);
				}
			} catch (error) {
				messageApi.open({
					type: "error",
					content: "发布失败！！",
				});
			}
		} else {
			try {
				const res = await axios({
					method: "PATCH",
					url: `http://localhost:80/api/v1/articles/${articleId}`,
					data: data,
				});

				if ((res.data.status = "success")) {
					messageApi.open({
						type: "success",
						content: "更新成功！！",
					});
					setTimeout(() => {
						navigate(`/navi/articles/${articleId}`);
					}, 1500);
				}
			} catch (error) {
				messageApi.open({
					type: "error",
					content: "更新失败失败！！",
				});
			}
		}
	};

	const toolbar = {
		h1: true, // h1
		h2: true, // h2
		h3: true, // h3
		h4: true, // h4
		img: true, // 图片
		link: true, // 链接
		code: true, // 代码块
		preview: true, // 预览
		expand: true, // 全屏
		/* v0.0.9 */
		undo: true, // 撤销
		redo: true, // 重做
		save: true, // 保存
		/* v0.2.3 */
		subfield: true, // 单双栏模式
	};

	return (
		<CreatorEditorContainer>
			{contextHolder}
			<CategoryLable>
				<Input
					placeholder='分类（category）'
					prefix={<IdcardOutlined />}
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>
				<Input
					placeholder='标签（label）'
					prefix={<TableOutlined />}
					value={label}
					onChange={(e) => setLabel(e.target.value)}
				/>
				<div onClick={releaseHandle}>
					<Button buttonType={BUTTON_TYPE_CLASSES.action_1_blue}>
						{articleId ? "更新" : "发布"} &rarr;
					</Button>
				</div>
			</CategoryLable>
			<EditorContainer className={["editor-wrap"]}>
				<Editor
					toolbar={toolbar}
					value={value}
					onChange={(value) => handleChange(value)}
					height='100%'
					addImg={addImg}
					onSave={SaveHandle}
				/>
			</EditorContainer>
		</CreatorEditorContainer>
	);
};

export default CreatorEditor;
