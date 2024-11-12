"use client";
import TheNewHeader from "@/app/components/TheNewHeader";
import Footer from "@/app/components/Footer";
import { useState, ChangeEvent, FormEvent } from "react";
import { slidesBusiness } from "@/app/utils/slides";
import Slider from "@/app/components/Slider";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

interface Alert {
    message: string;
    type: "success" | "error";
}

export default function ContactsPage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [alert, setAlert] = useState<Alert | null>(null);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Form Submitted Successfully', data);
                setFormData({ name: '', email: '', message: '' });
                setErrors({});
                setAlert({ message: 'Form submitted successfully!', type: 'success' });
            } catch (error) {
                console.error('Error submitting form:', error);
                setAlert({ message: 'Error submitting form. Please try again.', type: 'error' });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <>
            <TheNewHeader />
            <Slider slides={slidesBusiness} />
            <div className="container">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 space-y-4 mb-5">
                    {alert && (
                        <div className={`mt-5 p-4 mb-4 text-white rounded-md ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                            {alert.message}
                        </div>
                    )}
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block font-semibold text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-yellow-500 focus:border-transparent active:border-transparent"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="w-1/2">
                            <label className="block font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-yellow-500 focus:border-transparent active:border-transparent"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-yellow-500 focus:border-transparent active:border-transparent"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full p-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-indigo-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}