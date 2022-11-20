import { TEXTS } from '@/constants';
import { useFetchProducts } from '@/services/query/products';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React, { Suspense } from 'react';

const Products = () => {
  const { data } = useFetchProducts();

  return (
    <Suspense fallback={<h1> Loading .. </h1>}>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              {TEXTS.PRODUCTS_TITLE}
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {['imagen', 'producto', 'categoria', 'precio', 'usuario', 'acciones'].map(
                    (el) => (
                      <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                        <Typography
                          variant="small"
                          className="text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {data?.productos.map(({ precio, nombre, categoria, usuario, img }, key) => {
                  const className = `py-3 px-5 'border-b border-blue-gray-50'`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <img src={img} alt={nombre} className="h-10" />
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-semibold">
                              {nombre}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {categoria.nombre}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {precio}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {usuario.nombre}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </Suspense>
  );
};

export default Products;
