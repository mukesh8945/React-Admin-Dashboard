import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const List = () => {

    const rows = [
        {
            id: 114333155,
            product: "Real Football 2016",
            img: "https://image.apktoy.com/img/1e/com.gameloft.android.GAND.GloftRF16/icon.png",
            customer: "Lucky Jain",
            date: "6 April",
            amount: 8999,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 1143143455,
            product: "Asphalt Nitro 2",
            img: "https://redmod.co/wp-content/uploads/2021/07/Asphalt-Nitro-2-icon.jpg",
            customer: "Graeme Smith",
            date: "1 March",
            amount: 1299,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 1143143255,
            product: "Kingdoms & Lords",
            img: "https://www.mobygames.com/images/covers/l/425089-kingdoms-lords-blackberry-front-cover.png",
            customer: "Tommy Vercetti",
            date: "9 March",
            amount: 7875,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 1143143255,
            product: "Dragon Mania",
            img: "https://i0.wp.com/img.talkandroid.com/uploads/2015/01/dragon_mania_legends_app_icon.png",
            customer: "Milli Bobby Brown",
            date: "30 September",
            amount: 4785,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 1143157755,
            product: "Gangstar Rio: City of Saints",
            img: "https://image.winudf.com/v2/image1/Y29tLmdhbWVsb2Z0LmFuZHJvaWQuQU5NUC5HbG9mdEc0SE1faWNvbl8xNTY2NTI0NzgwXzA3MA/icon.png?w=&fakeurl=1",
            customer: "John Smith",
            date: "1 December",
            amount: 7833,
            method: "Cash on Delivery",
            status: "Failed",
        },
    ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">Tracking ID</TableCell>
                        <TableCell className="tableCell">Product</TableCell>
                        <TableCell className="tableCell">Customer</TableCell>
                        <TableCell className="tableCell">Date</TableCell>
                        <TableCell className="tableCell">Amount</TableCell>
                        <TableCell className="tableCell">Payment Method</TableCell>
                        <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell">{row.id}</TableCell>
                            <TableCell className="tableCell">
                                <div className="cellWrapper">
                                <img src={row.img} alt="" className="image" />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">₹{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                            <TableCell className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List
