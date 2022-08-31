import React from 'react';

const Blog = () => {
    return (
        <div className='px-8 bg-secondary'>
            <div className='bg-secondary grid lg:grid-cols-1 sm:grid-cols-1 gap-5 '>
                <div >
                    <h2 className='text-secondary  bg-white text-2xl font-bold py-2'>Difference between javascript and nodejs</h2>
                    <p className='text-white text-xl'>JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic.</p>
                    <p className='text-white text-xl'>Node.js also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program.</p>
                </div>
                <div>
                    <h2 className='text-secondary  bg-white text-2xl font-bold py-2'>When should you use nodejs and when should you use mongodb</h2>
                    <p className='text-white text-xl'>Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
                    <p className='text-white text-xl'>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
                </div>
                <div>
                    <h2 className='text-secondary  bg-white text-2xl font-bold py-2'>Differences between sql and nosql databases:</h2>
                    <p className='text-white text-xl'>SQL databases use structured query language and have a pre-defined schema for defining and manipulating data. SQL is one of the most versatile and widely used query languages available, making it a safe choice for many use cases.</p>
                    <p className='text-white text-xl'>NoSQL databases have dynamic schemas for unstructured data, and the data is stored in many ways. You can use column-oriented, document-oriented, graph-based, or KeyValue store for your data.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;