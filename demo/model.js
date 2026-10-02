/* Fictional demo model, independent from company integrations. */
(function(root){
 const suppliers=[{name:'Supplier A',packPrice:20,freight:9},{name:'Supplier B',packPrice:22,freight:2}];
 function plan(stock){
  if(!Number.isInteger(stock)||stock<0||stock>6)throw new Error('Usable stock must be an integer from 0 to 6');
  const allocated=Math.min(stock,6),shortage=6-allocated,packs=Math.ceil(shortage/2);
  const quotes=suppliers.map(q=>({...q,total:packs?q.packPrice*packs+q.freight:0}));
  return {allocated,shortage,packs,quotes,selected:quotes.reduce((a,b)=>a.total<=b.total?a:b)};
 }
 const api={plan,delta:(target,saved)=>target-saved};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.OrderFlowDemo=api;
})(typeof globalThis!=='undefined'?globalThis:this);
