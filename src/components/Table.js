import React from 'react'

export default function Table({ columns = [], data = [{}], bold = true }) {

    return <table>
        <thead>
            <tr>
                {columns.map(column => <th style={{ fontWeight: bold ? "bold" : "normal" }}>
                    {column.label}
                </th>)}
            </tr>
        </thead>
        <tbody>
            {data.map(d => <tr>
                {columns.map(col => <td>{d[col.key]}</td>)}
            </tr>)}
        </tbody>
    </table>
}