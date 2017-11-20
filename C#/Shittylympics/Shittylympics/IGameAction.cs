using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shittylympics
{
    /*public interface IGameAction<T>
    {
        T Action();
    }*/

    public interface IGameAction
    {
        object Action();
    }
}
