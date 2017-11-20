using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.State
{
    interface IState<T>
    {
        void Change(T value); 
    }
}
