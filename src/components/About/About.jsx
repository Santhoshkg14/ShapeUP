import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-gradient-to-r from-green-400 to-blue-500">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12" >
                        <img
                            className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
                            src="https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-3xl text-white font-bold md:text-4xl">
                            About <span className="text-yellow-300">Shape</span>
                            <span className="text-red-300">UP</span>
                        </h2>
                        <p className="mt-6 text-lg text-white font-medium">
                            Welcome to Shape UP, your ultimate destination for fitness inspiration,
                            personalized workout plans, and nutritional guidance. We believe that
                            a healthy lifestyle is the foundation of a happy and fulfilling life.
                        </p>
                        <p className="mt-6 text-lg text-white font-medium">
                            Our mission is to empower you with the tools, knowledge, and motivation
                            needed to transform your health. Whether you’re just starting out or you’re a seasoned athlete, we’re here to support you every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}