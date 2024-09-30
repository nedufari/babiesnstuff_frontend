"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  SvgIcon,
  Skeleton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { dashedDownIcon } from "../../utils/icons";
import CartSummary from "../../components/cart/CartSummary";
import { useParams } from "next/navigation";
import { useGetGuestRegistryQuery } from "@/app/store/Features/registry/registryApiSlice";
import RegistryItem from "@/app/components/registry/RegistryItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch } from "react-redux";
import {
  addItemIds,
  addNumb,
  addUserId,
} from "@/app/store/Features/registry/registrySlice";

const UserBabyRegistryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [numb, setNumb] = useState<{ price: number; tax: number }[]>([]);

  const {
    data: allRegistry,
    isLoading: isLoadingAllRegistry,
    refetch,
  } = useGetGuestRegistryQuery(Number(id));

  const filterRegistryItems = (trueIds: string[], allRegistry: any) => {
    return allRegistry.filter((item: any) => trueIds.includes(item.id));
  };

  useEffect(() => {
    dispatch(addUserId({ id: Number(id) }));
    refetch();
  }, []);
  const [state, setState] = React.useState<any>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState: any) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };

  useEffect(() => {
    const trueIds: any = Object.keys(state).filter((key: any) => state[key]);
    dispatch(addItemIds({ itemIds: trueIds }));

    const filteredItems = filterRegistryItems(trueIds, allRegistry || []);

    let res = filteredItems.map((item: any) => {
      return {
        price: Number(item.cost),
        tax: Number(item.product.taxRate),
      };
    });

    setNumb(res);

    dispatch(addNumb({ numb: res }));
  }, [state]);

  return (
    <Box
      sx={{
        backgroundColor: "#F6F6F6",
        width: "100%",
        maxWidth: "100%",
        paddingY: "3rem",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              marginBottom: "2rem",
              width: "100%",
              flex: 2,
            }}
          >
            <Accordion
              sx={{
                "& .MuiAccordionDetails-root": {
                  padding: "unset",
                },
                width: "100%",
              }}
              expanded={true}
            >
              <AccordionSummary
                expandIcon={<SvgIcon>{dashedDownIcon()}</SvgIcon>}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  variant="poster"
                  fontWeight="600"
                  fontSize="24px"
                  lineHeight="48px"
                >
                  Registry Items ({allRegistry?.length || 0})
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {allRegistry ? (
                    <>
                      {allRegistry.map((item, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            border: "1px solid #C0C0C0",
                            paddingLeft: "1rem",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                // checked={gilad}
                                onChange={handleChange}
                                name={item.id}
                              />
                            }
                            label=""
                          />
                          <RegistryItem {...item} checked={true} />
                        </Box>
                      ))}
                    </>
                  ) : (
                    <Skeleton variant="rounded" width="450px" height="100%" />
                  )}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Box>
          <CartSummary numb={numb} isOrder="registry" shippinFee={null} />
        </Box>
      </Container>
    </Box>
  );
};

export default UserBabyRegistryPage;
