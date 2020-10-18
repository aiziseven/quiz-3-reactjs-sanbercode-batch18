import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div style={{
            border: "1px solid #ccc"
        }}>
            <div>
                <h1 style={{ textAlign: "center;" }}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                <ol>
                    <li><strong>Nama:</strong> Irfan Zuliardi</li>
                    <li><strong>Email:</strong> zuliardiirfan@gmail.com</li>
                    <li><strong>Sistem Operasi yang digunakan:</strong> Windows 10 Home Single Language</li>
                    <li><strong>Akun Github:</strong> https://github.com/aiziseven</li>
                    <li><strong>Akun Telegram:</strong> https://t.me/aizi_seven</li>
                </ol>
                <Link to='/'>
                    <button>kembali ke index</button>
                </Link>
            </div>
            <br />
            <br />
        </div>
    );
}

export default About;