import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import images from "./imgImports.js";

const BookShelf = () => {
	const [bookList, setBookList] = useState([
		{
			id: 1,
			name: "The Candy House",
			author: "Jennifer Egan",
			yr_of_pub: 2010,
			price: 400,
			image: images[2].img,
		},
		{
			id: 2,
			name: "Checkout 19",
			author: "Claire-Louise Bennett",
			yr_of_pub: 2015,
			price: 500,
			image: images[0].img,
		},
		{
			id: 3,
			name: "Demon Copperhead",
			author: "Barbara Kingsolver",
			yr_of_pub: 2018,
			price: 700,
			image: images[1].img,
		},
		{
			id: 4,
			name: "The Furrows",
			author: "Namwali Serpell",
			yr_of_pub: 2020,
			price: 900,
			image: images[3].img,
		},
		{
			id: 5,
			name: "Trust",
			author: "Hernan Diaz",
			yr_of_pub: 2022,
			price: 1100,
			image: images[4].img,
		},
	]);
	const [name, setName] = useState(Boolean);
	const [author, setAuthor] = useState(Boolean);
	const [price, setPrice] = useState(Boolean);
	const [year, setYear] = useState(Boolean);
	const bookListBkUp = bookList;
	const sortByYear = (e) => {
		e.preventDefault();
		setBookList(
			bookList.sort((b1, b2) =>
				b1.yr_of_pub < b2.yr_of_pub
					? 1
					: b1.yr_of_pub > b2.yr_of_pub
					? -1
					: 0
			)
		);
	};
	const updateFilter = (condition) => {
		if (name)
			setBookList(
				bookList.filter((ele) =>
					ele.name.toLowerCase().includes(condition)
				)
			);
		if (author)
			setBookList(
				bookList.filter((ele) =>
					ele.author.toLowerCase().includes(condition)
				)
			);
		if (year)
			setBookList(
				bookList.filter((ele) => ele.yr_of_pub > parseInt(condition))
			);
		if (price)
			setBookList(
				bookList.filter((ele) => ele.price > parseInt(condition))
			);
		// setBookList(bookListBkUp)
	};
	return (
		<div>
			<input
				type="checkbox"
				onChange={(e) => setName(e.target.checked)}
			/>
			Name
			<input
				type="checkbox"
				onChange={(e) => setAuthor(e.target.checked)}
			/>
			Author
			<input
				type="checkbox"
				onChange={(e) => setPrice(e.target.checked)}
			/>
			Price
			<input
				type="checkbox"
				onChange={(e) => setYear(e.target.checked)}
			/>
			Year <br />
			<input type="text" onChange={(e) => updateFilter(e.target.value)}/>
			{bookList.map((book) => (
				<div>
					<img src={book.image} alt={book.name} />
					<h4>{book.name}</h4>
					<h4>{book.author}</h4>
					<h4>{book.price}</h4>
					<h4>{book.yr_of_pub}</h4>
				</div>
			))}
		</div>
	);
};

export default BookShelf;
