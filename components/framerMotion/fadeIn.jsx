// import { Box } from "@mui/material";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";

// const useStyles = makeStyles((theme) => ({
//   root: (props) => ({
//     position: "relative",
//   }),
//   content: {
//     opacity: 0,
//   },
// }));

// const Visual = () => {
//   const classes = useStyles({
//     isLarge: props.isLarge,
//     backgroundImageUrl: props.bgImg,
//   });
//   const controls1 = useAnimation();
//   const { ref: ref1, inView: inView1 } = useInView({
//     threshold: 0.9,
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (inView1) {
//       controls1.start({
//         opacity: 1,
//         transition: { duration: 1 },
//       });
//     }
//   }, [controls1, inView1]);

//   return (
//     <motion.div
//       className={classes.root}
//       transition={{ duration: 1 }}
//       style={
//         props.isLarge
//           ? {
//               backgroundImage: `url(${props.bgImg})`,
//               maxHeight: "362px",
//               maxWidth: "302px",
//               // backgroundSize: "302px 362px",
//             }
//           : {
//               backgroundImage: `url(${props.bgImg2})`,
//               maxHeight: "273px",
//               maxWidth: "304px",
//               // backgroundSize: "304px 273px",
//             }
//       }
//     >
//       <motion.div
//         ref={ref1}
//         className={classes.content}
//         animate={controls1}
//         initial={{ opacity: 0 }}
//       >
//         <Box sx={{ mt: 2 }}>
//           <img src={props.img} />
//         </Box>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Visual;
