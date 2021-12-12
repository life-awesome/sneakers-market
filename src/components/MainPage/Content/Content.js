import React, {useEffect, useState} from "react";

const Content = () => {
    const [sneakers, setSneakers] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch('https://61b5c91a0e84b70017331bd2.mockapi.io/sneakers')
            .then(response => response.json())
            .then(data => setSneakers(data))
    }, [])
    return (
        <>
            <div className="d-flex justify-content-between mt-5">
                <h2>Все кроссовки</h2>
                <div className="d-flex align-items-center">
                    <img src="/images/search.svg" alt="search-icon"/>
                    <input type="text" placeholder={"Поиск..."} className="search"
                           onChange={e => setSearch(e.target.value)}/>
                </div>
            </div>
            <div>
                <div className="card-wrapper">
                    {sneakers
                        .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
                        .map((obj, index) => {
                            return (
                                <div className="card-sneaker" key={index}>
                                    <div>
                                        <img src={obj.src} alt="sneakers"/>
                                        <p>{obj.name}</p>
                                        <div
                                            className="d-flex justify-content-between align-items-center mt-3">
                                            <div>
                                                <p className="price">Цена:</p>
                                                <p><strong>{obj.price}</strong></p>
                                            </div>
                                            <div>
                                                <img src="/images/plus.svg" alt="plus" className="plus"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </>
    )
}
export default Content