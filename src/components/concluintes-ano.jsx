import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function ConcluintesAno (props){

    const data = [
        {
          name: '2015',
          concluintes: 5,
        },
        {
          name: '2016',
          concluintes: 6,
        },
        {
          name: '2017',
          concluintes: 9,
        },
        {
          name: '2018',
          concluintes: 13,
        },
        {
          name: '2019',
          concluintes: 15,
        },
        {
          name: '2020',
          concluintes: 7,
        },
        {
          name: '2021',
          concluintes: 6,
        },
      ];

    return (

        <React.Fragment>
            <h3 style={{textAlign: "center"}}>Concluintes por Ano</h3>
            <ResponsiveContainer width="100%" height={400}>

                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="concluintes" fill="#B82601" />
                </BarChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}


export default ConcluintesAno;