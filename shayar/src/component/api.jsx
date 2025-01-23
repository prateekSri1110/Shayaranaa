import React, { useEffect, useState } from 'react';
import link from "../images/link.png";
import "./all.css";

function Api() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/user/fetch')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('NO DATA AVAILABLE');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);;
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div class="container-fluid bground">
            <div className='row text-center'>
                <div className='col-md-2' />
                <div className='col-md-8 p-3 mb-4'>
                    {data.map((item) => (
                        <div className="mb-4 p-4 text-center cards" style={{ position: 'relative' }}>
                            <p className='stext'>{item.lines}</p>
                            <cite className='ptext'>- {item.name}</cite><br /><br />
                            <a className='links' href={item.socialLink} target="_blank" rel="noopener noreferrer" >
                                <img
                                    src={link}
                                    alt="Instagram"
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </a>
                            <br />
                        </div>
                    ))}
                </div>
                <div className='col-md-2' />
            </div>
        </div>
    );
}

export default Api;