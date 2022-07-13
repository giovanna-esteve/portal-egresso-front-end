import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from "recharts";

function FaixaSalario (props){

    const data01 = [
        { name: "Abaixo 1000", value: 10 },
        { name: "Entre 1000 e 3000", value: 30 },
        { name: "Entre 3000 e 5000", value: 80 },
        { name: "Entre 5000 e 10000", value: 120 },
        { name: "Acima 10000", value: 150 },
      ];

    return (

        <React.Fragment>
            <h3 style={{textAlign: "center"}}>Faixa Salarial</h3>
            <ResponsiveContainer width="100%" height={450}>

                <PieChart width={1000} height={450}>
                    <Pie
                        dataKey="value"
                        nameKey="name"
                        isAnimationActive={false}
                        data={data01}
                        cx={200}
                        cy={200}
                        outerRadius={80}
                        fill="#B82601"
                        />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}


export default FaixaSalario;